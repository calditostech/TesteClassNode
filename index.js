
 var aluno1 = {
 	fullname : 'John Doe 1',
 	eid : 1234,
 	classe : ['sala 1','sala 2','sala 3','sala 4','sala 5','sala 6']


 };
    
 var addresses1 = {
     type : ['phone','email'],
     tags : ['aluno','pai','mae'],
     address_mae: [551138839332,'johndoe1mae@gmail.com'],
     address_pai: ['johndoepai2@gmail.com','johndoepai3@gmail.com',5519985504400],
     address_aluno : 'johndoealuno1@gmail.com',
     invisible: true,
     see_all:true

};

var aluno2 = {
    fullname : 'Mary Doe 2',
    eid : '1235',
    classes : 'Sala 1'
};

var addresses2 = {
	type : ['phone','email'],
    tags : ['aluno','pai','mae'],
	address_aluno : 'marydoe1@gmail.com',
	invisible: false,
	see_all: false
};

var aluno3 = {
    fullname : 'Victor Doe 3',
    eid : '1236',
    classes : ['sala 6', 'sala 7']
};

var addresses3 = {
	type : ['phone','email'],
    tags : ['aluno','pai','mae'],
	address_pai : 'victordoepai1@hotmail.com',
	address_mae : 'victordoe3@gmail.com',
	phone_aluno : '551974430033',
	invisible : false,
	see_all : false
};

console.log( `Aluno : ${aluno1.fullname}`);
console.log( `Eid : ${aluno1.eid}`);
console.log(`Classe : ${aluno1.classe}`);
console.log('Tipo de Contato :' + addresses1.type[0]);
console.log( 'Responsavel :' + addresses1.tags[2]);
console.log( 'Telefone Mãe :' + addresses1.address_mae[0]  +   ' Email: ' + addresses1.address_mae[1]);
console.log( 'Tipo de Contato :' + addresses1.type[1]);
console.log( 'Responsavel :' + addresses1.tags[1]);
console.log( 'Telefone Pai : ' + addresses1.address_pai[2] +  ' Email:' + addresses1.address_pai[0] + addresses1.address_pai[1]);
console.log(`Email do Aluno : ${addresses1.address_aluno}`);
console.log(`invisible:${addresses1.invisible}`);
console.log(`see_all${addresses1.see_all}`);

console.log('###########################')

console.log( `Aluno2 : ${aluno2.fullname}`);
console.log(`Eid : ${aluno2.eid}`);
console.log(aluno2.classes);
console.log('Tipo de Contato :' + addresses2.type[1]);
console.log('Responsavel :' + addresses2.tags[1]);
console.log(`Email Aluno : ${addresses2.address_aluno}`);
console.log(`invisible: ${addresses2.invisible}`);
console.log(`see_all: ${addresses2.see_all}`);

console.log('############################');

console.log(`Aluno : ${aluno3.fullname}`);
console.log(`Eid : ${aluno3.eid}`);
console.log(`Classe : ${aluno3.classes}`);
console.log('Tipo de Contato' + addresses3.type);
console.log('Responsavel :' + addresses3.tags);
console.log(`Email Pai : ${addresses3.address_pai}`);
console.log(`Email Mãe : ${addresses3.address_mae}`);
console.log(`Contato Aluno : ${addresses3.phone_aluno}`);
console.log(`invisible :${addresses3.invisible}`);
console.log(`see_all :${addresses3.see_all}`);
   
