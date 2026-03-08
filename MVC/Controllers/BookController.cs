using System.Collections.Generic;

public class BookController
{
    private List<Book> books;
    private BookView view;

    public BookController()
    {
        books = new List<Book>();
        view = new BookView();
    }

    public void Run()
    {
        bool running = true;

        while (running)
        {
            int choice = view.ShowMenu();

            switch (choice)
            {
                case 1:
                    view.DisplayBooks(books);
                    break;

                case 2:
                    Book newBook = view.GetNewBookDetails();
                    books.Add(newBook);
                    break;

                case 3:
                    running = false;
                    break;

                default:
                    Console.WriteLine("Невалиден избор!");
                    break;
            }
        }
    }
}