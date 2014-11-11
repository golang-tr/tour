/* Copyright 2012 The Go Authors.   All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
'use strict';

angular.module('tour.values', []).

// List of modules with description and lessons in it.
value('tableOfContents', [{
    'id': 'mechanics',
    'title': 'Go turu kullanımı',
    'description': '<p><a href="http://golang.org">Go programlama dili</a> turuna hoşgeldiniz. Turumuz, dilin en önemli özelliklerini kapsayan üç ana bölümden oluşuyor:</p>',
    'lessons': ['welcome']
}, {
    'id': 'basics',
    'title': 'Temel kavramlar',
    'description': '<p>Başlangıç olarak, dilin temellerini öğrenin.</p><p>Değişken tanımlama, fonksiyon çağırma ve diğer konulara geçmeden önce bilmeniz gereken herşey.</p>',
    'lessons': ['basics', 'flowcontrol', 'moretypes']
}, {
    'id': 'methods',
    'title': 'Metodlar ve arayüzler',
    'description': '<p>Türlere metod tanımlamayı, arayüz bildirmeyi ve bunların hepsini nasıl bir arada kullanacağınızı öğrenin.</p>',
    'lessons': ['methods']
}, {
    'id': 'concurrency',
    'title': 'Eşzamanlılık',
    'description': '<p>Go, eşzamanlılık özelliklerini dilin temel bir parçası olarak sunar.</p><p>Bu bölüm, go rutinlerin ve kanalların eşzamanlılık desenlerini gerçeklemede nasıl kullanıldığı anlatır.</p>',
    'lessons': ['concurrency']
}]).

// translation
value('translation', {
    'off': 'kapalı',
    'on': 'açık',
    'syntax': 'Sözdizimi Vurgulaması',
    'lineno': 'Satır Numaraları',
    'reset': 'Slaytı Sıfırla',
    'format': 'Kaynak Kodu Biçimle',
    'kill': 'Programı Öldür',
    'run': 'Çalıştır',
    'compile': 'Derle ve Çalıştır',
    'more': 'Seçenekler',
    'toc': 'İçindekiler',
    'prev': 'Geri',
    'next': 'İleri',
    'waiting': 'Sunucu bekleniyor...',
    'errcomm': 'Sunucu iletişiminde hata.',
}).

// Config for codemirror plugin
value('ui.config', {
    codemirror: {
        mode: 'text/x-go',
        matchBrackets: true,
        lineNumbers: true,
        autofocus: true,
        indentWithTabs: true,
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true,
        extraKeys: {
            'Shift-Enter': function() {
                $('#run').click();
            },
            'Ctrl-Enter': function() {
                $('#format').click();
            },
            'PageDown': function() {
                return false;
            },
            'PageUp': function() {
                return false;
            },
        }
    }
});
