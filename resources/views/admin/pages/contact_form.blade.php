@extends('twill::layouts.form')

@section('contentFields')
    @formField('input', [
        'name' => 'values.text',
        'label' => 'Description',
        'maxlength' => 100
    ])

    @formField('block_editor', [
        'blocks' => ['card_with_image', 'card_with_video', 'multi_card']
    ])
@stop
