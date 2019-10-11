@formField('input', [
  'name' => 'title',
  'label' => 'Titel',
  'maxlength' => 100
])

@formField('wysiwyg', [
  'name' => 'text',
  'label' => 'Text',
  'toolbarOptions' => ['bold', 'italic', 'underline', ['list' => 'ordered'], ['list' => 'bullet' ], 'link', ["align" => []], ['header' => [2, 3, false]]],
  'placeholder' => 'Text eingeben...',
])

@formField('select', [
    'name' => 'size',
    'label' => 'Kartengrösse',
    'unpack' => true,
    'options' => [
        [
            'value' => 'small',
            'label' => 'Klein'
        ],
        [
            'value' => 'medium',
            'label' => 'Mittel'
        ],
        [
            'value' => 'large',
            'label' => 'Gross'
        ]
    ]
])

@formField('input', [
  'name' => 'url',
  'label' => 'Yotube Link',
])
