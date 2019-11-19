@extends('twill::layouts.form')

@section('contentFields')
    @formField('wysiwyg', [
        'name' => 'values.text',
        'label' => 'Text',
        'toolbarOptions' => [
            'bold',
            'italic',
            'underline',
            ['color' => [
                '#3490dc', '#6574cd', '#9561e2', '#f66d9b', '#e3342f', '#f6993f', '#e89602', '#38c172', '#4dc0b5', '#6cb2eb', '#4a4a4a', 'black'
            ]],
            ['list' => 'ordered'],
            ['list' => 'bullet' ],
            'link',
            ["align" => []],
            ['header' => [1, 2, 3, false]],
            'image'],
        'placeholder' => 'Text eingeben...',
    ])

     @formField('wysiwyg', [
        'name' => 'values.address',
        'label' => 'Addresse',
        'toolbarOptions' => [
            'bold',
            'italic',
            'underline',
            ['color' => [
                '#3490dc', '#6574cd', '#9561e2', '#f66d9b', '#e3342f', '#f6993f', '#e89602', '#38c172', '#4dc0b5', '#6cb2eb', '#4a4a4a', 'black'
            ]],
            ['list' => 'ordered'],
            ['list' => 'bullet' ],
            'link',
            ["align" => []],
            ['header' => [1, 2, 3, false]],
            'image'
        ],
        'placeholder' => 'Text eingeben...',
    ])
@stop
