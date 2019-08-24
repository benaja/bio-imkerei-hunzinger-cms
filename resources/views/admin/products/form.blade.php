@extends('twill::layouts.form')

@section('contentFields')
    {{-- @formField('input', [
        'name' => 'description',
        'label' => 'Beschreibung',
        'maxlength' => 100
    ]) --}}

    @formField('wysiwyg', [
        'name' => 'description',
        'label' => 'Beschreibung',
        'toolbarOptions' => ['bold', 'italic', 'underline', ['list' => 'ordered'], ['list' => 'bullet' ], 'link', ["align" => []], ['header' => [2, 3, false]]],
        'placeholder' => 'Produktbeschreibung',
    ])

    @formField('medias', [
        'name' => 'cover',
        'label' => 'Bild'
    ])

    @formField('repeater', ['type' => 'prices'])
@stop
