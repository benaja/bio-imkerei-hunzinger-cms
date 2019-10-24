@extends('twill::layouts.form')

@section('contentFields')
   @formField('medias', [
        'name' => 'gallery',
        'label' => 'Bilder',
        'max' => 1000
    ])
@stop
