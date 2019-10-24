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
    'name' => 'orientation',
    'label' => 'Ausrichtung Bild',
    'unpack' => true,
    'options' => [
        [
            'value' => 'left',
            'label' => 'Links'
        ],
        [
            'value' => 'right',
            'label' => 'Rechts'
        ]
    ]
])

@formField('medias', [
    'name' => 'slideshow',
    'label' => 'Bilder',
    'max' => 10
])
