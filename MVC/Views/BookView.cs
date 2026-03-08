using System;
using System.Collections.Generic;

public class BookView
{
    public void DisplayBooks(List<Book> books)
    {
        if (books.Count == 0)
        {
            Console.WriteLine("Няма добавени книги.");
            return;
        }

        Console.WriteLine("\nСписък с книги:");

        int i = 1;
        foreach (var book in books)
        {
            Console.WriteLine($"{i}. Заглавие: {book.Title}, Автор: {book.Author}, Година: {book.YearPublished}");
            i++;
        }
    }

    public Book GetNewBookDetails()
    {
        Console.Write("Въведете заглавие: ");
        string title = Console.ReadLine();

        Console.Write("Въведете автор: ");
        string author = Console.ReadLine();

        Console.Write("Въведете година на издаване: ");

        int year;
        while (!int.TryParse(Console.ReadLine(), out year))
        {
            Console.Write("Моля въведете валидна година: ");
        }

        return new Book(title, author, year);
    }

    public int ShowMenu()
    {
        Console.WriteLine("\nМеню:");
        Console.WriteLine("1 - Покажи книги");
        Console.WriteLine("2 - Добави книга");
        Console.WriteLine("3 - Изход");

        Console.Write("Изберете опция: ");

        int choice;
        while (!int.TryParse(Console.ReadLine(), out choice))
        {
            Console.Write("Моля въведете число: ");
        }

        return choice;
    }
}