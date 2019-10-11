@extends('twill::layouts.form')

@section('contentFields')
  {{-- @formField('block_editor', [
    'blocks' => ['card_with_image', 'multi_card']
  ]) --}}
  @formField('block_editor')
@stop
