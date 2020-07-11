@extends('twill::layouts.form')

@section('contentFields')
   {{-- @formField('medias', [
        'name' => 'gallery',
        'label' => 'Bilder',
        'max' => 1000
    ]) --}}
    {{-- @formField('repeater', ['type' => 'text']) --}}

    @formField('block_editor', [
        'blocks' => ['image_category']
    ])
@stop
