@formField('input', [
  'name' => 'title',
  'label' => 'Titel',
  'maxlength' => 100
])

@formField('wysiwyg', [
  'name' => 'card_text',
  'label' => 'Text auf Karte',
  'toolbarOptions' => ['bold', 'italic', 'underline', ['list' => 'ordered'], ['list' => 'bullet' ], 'link', ["align" => []], ['header' => [2, 3, false]]],
  'placeholder' => 'Kurzer Text, sollte nicht zu lang sein',
])

@formField('wysiwyg', [
  'name' => 'long_text',
  'label' => 'Ausführlicher Text',
  'toolbarOptions' => ['bold', 'italic', 'underline', ['list' => 'ordered'], ['list' => 'bullet' ], 'link', ["align" => []], ['header' => [2, 3, false]]],
  'placeholder' => 'Wenn der Text auf der Karte nicht ausreicht, hier noch der ausführliche Text',
])

@formField('select', [
    'name' => 'alignment',
    'label' => 'Ausrichtung des Bildes',
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

@formField('input', [
  'name' => 'url',
  'label' => 'Yotube Link',
])
