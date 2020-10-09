document.querySelector('button').addEventListener('click',generateQuote);



function generateQuote(){

    const quoteArray =[
        {
            'author': 'John Elesho ',
            'quote' : '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam totam quo autem, repellat ut accusamus, suscipit quaerat veritatis impedit molestias dolore id voluptate et ex, vitae aliquam fugit ea voluptatibus',
        },
        {
            'author': 'Lore Ipsum ',
            'quote' : '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam totam quo autem, repellat ut accusamus, suscipit quaerat veritatis impedit molestias dolore id voluptate et ex, vitae aliquam fugit ea voluptatibus',
        },
        {
            'author': 'Voluptatibus ',
            'quote' : '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam totam quo autem, repellat ut accusamus, suscipit quaerat veritatis impedit molestias dolore id voluptate et ex, vitae aliquam fugit ea voluptatibus',
        },
        {
            'author': 'Fugit Rea ',
            'quote' : '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam totam quo autem, repellat ut accusamus, suscipit quaerat veritatis impedit molestias dolore id voluptate et ex, vitae aliquam fugit ea voluptatibus',
        },
        {
            'author': 'Repellat Ut',
            'quote' : '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam totam quo autem, repellat ut accusamus, suscipit quaerat veritatis impedit molestias dolore id voluptate et ex, vitae aliquam fugit ea voluptatibus',
        }
    
    ]

    const quote = quoteArray[Math.floor(Math.random()*quoteArray.length)];
    console.log(quote);

    document.querySelector('#quote').textContent = quote.quote;
    document.querySelector('#author').textContent = quote.author;


}