@extends('twill::layouts.form')

@section('contentFields')
     @formField('wysiwyg', [
        'name' => 'description',
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

    @formField('medias', [
        'name' => 'cover',
        'label' => 'Bild'
    ])

    @formField('files', [
        'name' => 'single_file',
        'label' => 'Datei',
        'note' => 'Hochladen von z.B. eines PDFs.'
    ])

    @formField('input', [
        'name' => 'file_name',
        'label' => 'Dateiname'
    ])

@stop
