@extends('twill::layouts.form')

@section('contentFields')
  @formField('block_editor', [
    'blocks' => ['about_us_card']
  ])
@stop
