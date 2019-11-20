<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;

class SinglePageController extends Controller
{
    public function index()
    {
        return view('app');
    }

    public function registerForNewsletter(Request $request)
    {
        $this->validate($request, [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email'
        ]);
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt(
            $curl,
            CURLOPT_POSTFIELDS,
            json_encode([
                'email_address' => $request->email,
                'merge_fields' => [
                    'FNAME' => $request->firstname,
                    'LNAME' => $request->lastname
                ],
                'status' => 'subscribed'
            ])
        );
        $header = array(
            'Authorization: Basic ' . env("MAILGIMP_API_KEY")
        );
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        curl_setopt($curl, CURLOPT_URL, 'https://us7.api.mailchimp.com/3.0/lists/f7a7139972/members');
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        if (curl_errno($curl)) {
            $errorMessage = curl_error($curl);
        }
        curl_close($curl);
        $result = json_decode($result, true);
        if (isset($errorMessage)) {
            Log::error($errorMessage);
            return response('unknown error', 500);
        }
        if ($result['status'] == 400 && $result['title'] == 'Member Exists') {
            Log::notice('email already exist: ' . $request->email);
            return response('email already exists', 400);
        }
        return 'Successfully subscribed to email newsletter';
    }
}
