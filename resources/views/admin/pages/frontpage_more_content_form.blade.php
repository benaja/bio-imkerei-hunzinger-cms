@extends('twill::layouts.form')

@section('contentFields')
  @formField('block_editor', [
    'blocks' => ['card_with_image', 'card_with_video', 'multi_card']
  ])
  {{-- @formField('block_editor') --}}
@stop
