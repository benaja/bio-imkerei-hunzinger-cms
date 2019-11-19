@extends('twill::layouts.form')

@section('contentFields')
    @formField('wysiwyg', [
        'name' => 'values.content_left',
        'label' => 'Inhalt links',
        'toolbarOptions' => [
            'bold',
            'italic',
            'underline',
            ['list' => 'ordered'],
            ['list' => 'bullet' ],
            'link'
        ],
        'placeholder' => 'Text eingeben...',
    ])

     @formField('wysiwyg', [
        'name' => 'values.content_right',
        'label' => 'Inhalt rechts',
        'toolbarOptions' => [
            'bold',
            'italic',
            'underline',
            ['list' => 'ordered'],
            ['list' => 'bullet' ],
            'link'
        ],
        'placeholder' => 'Text eingeben...',
    ])
@stop
