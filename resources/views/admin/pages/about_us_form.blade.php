@extends('twill::layouts.form')

@section('contentFields')
  @formField('block_editor', [
    'blocks' => ['content_card']
  ])
@stop
