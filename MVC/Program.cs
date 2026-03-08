using System;
using System.Text;

class Program
{
    static void Main()
    {
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

        Console.InputEncoding = Encoding.GetEncoding(1251);
        Console.OutputEncoding = Encoding.GetEncoding(1251);

        BookController controller = new BookController();
        controller.Run();
    }
}