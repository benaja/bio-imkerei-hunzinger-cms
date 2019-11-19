@formField('wysiwyg', [
  'name' => 'text',
  'label' => 'Text',
  'toolbarOptions' => [
        'bold',
        'italic',
        'underline',
        ['list' => 'ordered'],
        ['list' => 'bullet' ],
        'link',
        ["align" => []],
        ['header' => [1, 2, 3, false]],
        'image'],
  'placeholder' => 'Text eingeben...',
])
