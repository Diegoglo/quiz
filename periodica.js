const namesCienciasNaturales=['Àngeles Alvariño','Florence Bascom','Rachel Carson','Josefina Castellvì','Inge Lehman','Wangari Maathai',
'Marie Stopes', 'Maria Sinylia Merian', 'Marie tharp y SylviaEarle']

const namesMatematicas = ['Maria Agnessi','La ura Bassi','Pilar Bayer','Emilie du Chatelet','M. Antonia Canals','M. Andrea Casamayor',
'Sophie Germain','Evelyn Boyd Granville', 'Hipatia de Alejandria', 'Katherine Johnson',' Sofia Kovalevskaya','Ada Lovelace',
'Nicole-Reine de Lepaute','Maryam Mirzajani', 'Emmy Noether', 'Mary Sommerville', 'Maria Wonenburger']

const periodicaList = document.getElementById('periodicaList')

const elementList= document.createElement('LI') 
elementList.textContent='perro matala'

periodicaList.appendchild(elementList)

for (const name of namesCienciasNaturales){
    console.log(name);
}