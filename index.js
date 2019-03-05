// import readingTime from 'reading-time';
import PostFixedNonTaxable from './rendaFixaApp/entities/behaviours/postFixedNonTaxable';

window.onload = () => {
    const resetEmotes = () => {
        alert('let\'s go! 2');
        console.log('asfasdfsda');
        const r = PostFixedNonTaxable.updatedGrossIncomeRate(12, 1.5, 1.5);
        document.getElementById('result').innerText = r;
    };

    document.getElementById('btnResult').addEventListener('click', resetEmotes, false);
};
