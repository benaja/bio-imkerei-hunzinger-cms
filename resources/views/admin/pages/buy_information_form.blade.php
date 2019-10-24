@extends('twill::layouts.form')

@section('contentFields')
  @formField('wysiwyg', [
        'name' => 'text',
        'label' => 'Beschreibung',
        'toolbarOptions' => [
            'bold',
            'italic',
            'underline',
            ['list' => 'ordered'],
            ['list' => 'bullet' ],
            'link',
            ["align" => []],
            ['header' => [1, 2, 3, false]],
            "image"
        ],
        'placeholder' => 'Produktbeschreibung',
    ])
@stop
