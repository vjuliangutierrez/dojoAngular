import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'my-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookComponent implements OnInit {
  heading = 'Library';
  cash = 10000;
  books: Book[];

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
    this.bookService.getBooks()
      .then(books => this.books = books.slice(0, 5));
  }

  totalCost() {
    let sum = 0;

    if(this.books){

for(let libro of this.books){
        if(libro.isAvailable == false){
          sum = sum + libro.price;
       }

    }


    }
    
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
  //Dinero restante de la compra de los libros
  let cashleft =this.cash -  this.totalCost()     ;
  return cashleft;
  }

  buy(book) {
    if (this.cashLeft()>=book.price) {
      book.isAvailable = false;
    } else {
      alert("You don't have enough cash");
    }
  }

  cancelBuy(book) {
    book.isAvailable = true;
  }

}
