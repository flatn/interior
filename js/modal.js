function _createModal(options) {
    const DEFAULT_WIDTH = '50vw'
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH} ">
            <div class="modal-header">
                <span class="modal-title"> ${options.title || 'Window'}</span>
                ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
            </div>
            <div class="modal-body" data-content>
            <div class="Winner">
            <p>WINNER</p>
            </div>
            ${options.language === 'rus' && options.discount !== 0 ? `<div>
             <p>Вы выиграли скидку в размере ${options.discount} ${options.bonus >= 1 ? `и приз, который вы можете получить в магазине при использовании скидки!` : '!'}</p>
             <p>Чтобы воспользоваться ею, сделайте репост у себя на стринце в Facebook,с подписью "Я выиграл скидку в Kolir Studio!", а затем приходите к нам в магазин!</p>
             <p>Скидка действует на весь мебельный ряд! Наши двери всегда открыты для вас!</p>  
             </div>` : options.language === 'ukr' && options.discount !== 0 ? `  <div>
             <p>Ви виграли знижку розмірі ${options.discount} ${options.bonus >= 1 ? `та подарунок, який вы зможете отримати в магазині разом зі знижкою!` : '!'}</p>
             <p>Щоб скористатися нею, зробіть репост у себе на сторінці в Facebook,с підписом "Я виграв знижку в Kolir Studio!", а потім приходьте до нас в магазин!</p>
             <p>Знижка працює на весь меблевий ряд! Наші двері завжди відкриті для вас!</p>
             </div>` : options.discount === 0 && options.language === 'rus' ? `<div >
          <p>К сожалению, вы не получили достаточное количество очков, чтобы выиграть скидку. Но не расстраивайтесь, вы можете попробовать еще раз или придти к нам в магазин!</p>
          <p>Наши двери всегда открыты для вас!</p>
         </div>` : `         <div >
         <p>На жаль, ви не отримали достатньої кількості очок, щоб виграти знижку. Але не розчаровуйтесь, ви можете спробувати ще раз або прийти до нас в магазин!</p>
         <p>Наші двері завжди відкриті для вас!</p>
         </div>`}
            </div>
            <div class="modal-footer ">
            <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.kolirstudio.com.ua%2F&layout=button&size=large&width=119&height=28&appId" width="119" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
             </div>
            </div>
        </div>
    </div>
`)
    document.body.appendChild(modal)
    return modal
}


function Modal(options) {
    const ANIMATION_SPEED = 200
    const _modal = _createModal(options)
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if (destroyed) {
                return console.log("Modal has been destroyed!")
            }
            !closing && _modal.classList.add('open')

        },
        close() {
            closing = true
            _modal.classList.remove('open')
            _modal.classList.add('hide')
            setTimeout(() => {
                _modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        },
    }
    const listener = e => {
        if (e.target.dataset.close) {
            modal.close()
        }
    }

    _modal.addEventListener('click', listener)

    return Object.assign(modal, {
        destroy() {
            _modal.parentNode.removeChild(_modal)
            _modal.removeEventListener('click', listener)
            destroyed = true
        }
    })

}
