@extends('twill::layouts.form')

@php
    $categories = [];
@endphp
@foreach(\App\Models\Category::all() as $category)
    @php
        $categories[] =
        [
            'value' => $category->id,
            'label' => $category->name
        ];
    @endphp
@endforeach

@section('contentFields')
    @formField('input', [
        'name' => 'short_description',
        'label' => 'Kurzbeschreibung',
        'placeholder' => 'Stichwortartige Beschreibung für Startseite',
        'maxlength' => 100
    ])

    @formField('checkbox', [
        'name' => 'available',
        'label' => 'Verfügbar'
    ])

    @formField('checkbox', [
        'name' => 'isBio',
        'label' => 'Bio Knospe'
    ])

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

    @formField('multi_select', [
        'name' => 'categories',
        'label' => 'Kategorien',
        'options' => $categories
    ])

    @formField('repeater', ['type' => 'prices'])
@stop
