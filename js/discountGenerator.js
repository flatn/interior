const generator = (points, bonuses) => {
    let discount;
    let bonus = 0;
    if (points < 2000) {
        discount = 0
    } else if (points >= 2000 && points < 3000) {
        discount = '10%'
    } else if (points > 3000 && points < 4000) {
        discount = '12%'
    } else if (points >= 4000 && points < 5000) {
        discount = '14%'
    } else if (points >= 5000 && points < 6000) {
        discount = '16%'
    } else if (points >= 6000 && points < 7000) {
        discount = '18%'
    } else if (points >= 7000) {
        discount = '20%'
    }
    if (bonuses > 15) {
        bonus = 1;
    }
    const modal = Modal({
        title: 'Prize!',
        closable: true,
        discount: discount,
        bonus: bonus,
        language: switcher
    })
    modal.open();

}
