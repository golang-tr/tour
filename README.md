##  Teşekkürler

Go Turu'nun çeviri ve kurulumunda aşağıdaki kişiler katkı sağlamıştır:

-   Mert Akkaya @mertak

-   Dursun Can Turan @dursun

-   Mustafa Serhat Dündar @msdundar

-   Armağan Karabina @karabinaa

-   Emre Can Yılmaz @ecylmz

-   Recai Oktaş @roktas

##  Güncelleme

Güncelleme yapabilmek için öncelikle bu depoya ve [App Engine
uygulamasına](http://tur.golang.org.tr) yazma hakkınız olması gerekiyor.  Bu
şartları sağlayan bir yönetici rolüne sahip değilseniz aşağıdaki yöntemlerden
birine başvurabilirsiniz:

-   Yeni bir [hata bildirimi](https://github.com/golang-tr/go-tour-tr/issues)
    oluşturun.  Küçük çaplı değişikliklerde bu yöntemi öneriyoruz.

-   Depoyu "fork" edin ve değişiklik isteklerinizi "Pull request"lerle bildirin.
    Geniş çaplı değişikliklerde bu yöntemi tercih edin.

Yönetici rolüne sahip bir topluluk üyesi iseniz güncelleme için aşağıdaki
adımları izleyin.

-   [Google App Engine
    SDK](https://developers.google.com/appengine/downloads?#Google_App_Engine_SDK_for_Go)
    son sürümü kurun.  **Dikkat!  App Engine SDK daima son sürüme güncellenmiş
    olmalı.**

-   Git ve Mercurial paketlerini kurun

        $ sudo apt-get install git mercurial

-   Mercurial-Git köprüsü betiğini kurun

        $ wget https://raw.github.com/felipec/git-remote-hg/master/git-remote-hg -O /usr/local/bin/git-remote-hg
        $ chmod +x /usr/local/bin/git-remote-hg

-   Depoyu klonlayın

-   İngilizce Go turu deposu için referans oluşturun

        $ git remote add upstream "hg::https://code.google.com/p/go-tour/"

-   İngilizce içeriği birleştirin

        $ git pull -s ours upstream master

    Birleştirme sırasında çakışma oluşmaması için `-s ours` seçeneğiyle Türkçe
    içeriğin korunmasını sağladığımızı not edin.  Dikkat!  Bu seçenek nedeniyle
    `content/*.article` dışında değiştirdiğimiz başka bazı dosyalar da (ör.
    `app.yaml`, `template/index.tmpl`) güncellenmeyecektir.  Bir sonraki adımda
    lütfen bunu kontrol edin.

-   Son güncellemeden bu yana üst depodaki tüm değişiklikleri öğrenin

        $ git log --since=$(cat .last-update) --full-diff upstream/master

    Sadece değiştirdiğimiz dosyalardaki değişiklikleri görmek için şu komut
    kullanılabilir.

        $ git log --since=$(cat .last-update) --full-diff upstream/master -- \
                content/*.article \
                static/js/values.js \
                template/index.tmpl \
                app.yaml

-   Gerekli düzenlemeleri yapın

-   Güncelleme tarihini güncelleyin

        $ stat -c %Y .git/FETCH_HEAD >.last-update

-   Değişiklikleri (anlamlı bir değişiklik güncesiyle) depoya gönderin

        $ git commit -a
        $ git push origin master

-   Uygulamayı güncelleyin

        $ goapp deploy -oauth .
