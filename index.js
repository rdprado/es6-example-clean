import readingTime from 'reading-time';
import PostFixedNonTaxable from './rendaFixaApp/entities/behaviours/postFixedNonTaxable';


const r = PostFixedNonTaxable.updatedGrossIncomeRate(12, 1.5, 1.5);
console.log(r);


window.calcRT = ev => {
	var stats = readingTime(ev.value).text;

    document.getElementById("readingTime").innerText = stats;
    
};
