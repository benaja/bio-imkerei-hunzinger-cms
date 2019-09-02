@extends('twill::layouts.form')
@section('appTypeClass', 'body--dashboard')
@section('content')
  MY CUSTOM CONTENT GOES HERE
@stop
@section('initialStore')
    window.STORE.datatable = {}
@stop
@push('extra_js')
    <script src="{{ mix('/assets/admin/js/manifest.js') }}"></script>
    <script src="{{ mix('/assets/admin/js/vendor.js') }}"></script>
    <script src="{{ mix('/assets/admin/js/main-dashboard.js') }}"></script>
@endpush