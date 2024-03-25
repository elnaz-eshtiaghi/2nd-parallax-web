let _main = document.getElementsByTagName('main')[0]
        let _h2 = document.querySelectorAll('main>h2')
        let _box = document.getElementById('box')
        let _sec = document.getElementsByTagName('section')[0]
        let _menufig = document.querySelectorAll('#fig>figure>img')[0]
        let _li = document.querySelectorAll('.men>li')
        let _icon = document.getElementsByClassName('icon')[0]
        let em = document.getElementsByTagName('input')[0]
        let l = document.getElementsByTagName('label')[0]
        const _img = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
        const _img2 = ['featured (0).png', 'featured (1).png', 'featured (2).png', 'featured (3).png', 'featured (4).png', 'featured (5).png', 'featured (6).png', 'featured (7).png', 'featured (8).png', 'featured (9).png', 'featured (10).png', 'featured (11).png', 'featured (12).png']


        _main.addEventListener('scroll', (e) => {

            let _st = e.target.scrollTop

            // document.getElementsByTagName('span')[0].innerHTML = _st

            let _ul = document.querySelectorAll('ul')[0]

            // .....text.....

            _h2[0].style.bottom = (260 - _st) + 'px'
            _h2[1].style.top = (380 - _st) + 'px'
            _h2[2].style.bottom = (210 - _st) + 'px'
            _h2[3].style.top = (580 - _st) + 'px'

            // .....box.....

            _box.style.left = (-_st) + 'px'
            if (_st > 100) {
                document.querySelector('figure>img').src = 'assets/img/' + _img[1]
            }
            if (_st > 700) {
                document.querySelector('figure>img').src = 'assets/img/' + _img[2]
            }
            if (_st > 1000) {
                document.querySelector('figure>img').src = 'assets/img/' + _img[3]
            }
            if (_st > 1500) {
                document.querySelector('figure>img').src = 'assets/img/' + _img[4]
            }
            if (_st > 2000) {

                document.querySelector('figure>img').src = 'assets/img/' + _img[5]
            }
            if (_st > 2500) {
                document.querySelector('figure>img').src = 'assets/img/' + _img[6]
                _sec.style.zIndex = -1
            }

        })

        // .....li/img.....


        _li.forEach((val, i) => {
            val.addEventListener('mouseenter', (e) => {
                _menufig.src = 'assets/img/' + _img2[i]
                _menufig.parentElement.parentElement.style.display = ' flex'
                e.target.children[0].children[0].style.animation = ' anim 2s infinite ease-in'
                e.target.children[0].children[0].style.display = 'block'
            })
            val.addEventListener('mouseleave', (e) => {
                _menufig.parentElement.parentElement.style.display = ' none'
                e.target.children[0].children[0].style.animation = 'a '
                e.target.children[0].children[0].style.display = 'none'

            })

        })

        // ......icon&footer......

        let flag = 1
        _icon.addEventListener('click', (e) => {

            // .....icon change.....

            if (flag % 2) {
                _icon.children[0].style.transform = 'rotate(45deg)'
                _icon.children[0].style.margin = 0
                _icon.children[1].style.transform = 'rotate(-45deg)'
                _icon.children[1].style.margin = 0
                _icon.children[2].style.width = ' 90%'

            } else {
                _icon.children[0].style.transform = 'rotate(0)'
                _icon.children[0].style.margin = '10px'
                _icon.children[1].style.transform = 'rotate(0)'
                _icon.children[1].style.margin = '10px'
                _icon.children[2].style.width = ' 0%'

            }
            flag++
           
        })
        _icon.children[2].addEventListener('click',(e)=>{
            e.stopImmediatePropagation()
        })
        

        // .....email regex .....

        em.addEventListener('keyup',(e)=>{
            e.target.nextElementSibling.style.opacity = 1
        })
        function _regex(e) {
            let _value = em.value
            if (
                (_value == '') ||
                (_value == null) ||
                ((_value.search(/\s/)) == 0) ||
                ((_value.search(/<script/)) >= 0) ||
                ((_value.search(/[ا-ی]/)) >= 0)) {

                e.preventDefault()
                l.style.display = 'block'
                l.style.color = 'red'

            }
            else {
                if (
                    ((_value.search(/[@]/)) >= 3) &&
                    ((_value.search(/\s/)) == -1) &&
                    ((_value.search(/[.]/)) >= 0) &&
                    (((_value.lastIndexOf('.')) + 2) <= (_value.length))


                ) {
                    alert('Submitted successfully')
                } else {
                    e.preventDefault()
                    l.style.display = 'block'
                    l.style.color = 'red'
                }
            }
        }