using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Stopwatch watch = new Stopwatch();
            watch.Start();
            int[] testArr = new int[] { 1, 4, 3, 4, 3 };
            int[] sorted = CountSort(testArr);
            for(int i = 0; i < sorted.Length; i++)
            {
                Console.Write(sorted[i] + " ");
            }
            watch.Stop();
            Console.WriteLine("The algorithm took " + watch.ElapsedMilliseconds + " milliseconds");
        }

        public static int[] CountSort(int[] a)
        {
            int kRange = 10;
            int[] count = new int[kRange];

            for(int i = 0; i < a.Length; i++)
            {
                count[a[i]]++;
            }

            for(int j = 1; j < count.Length; j++)
            {
                count[j] += count[j - 1];
            }

            int[] c = new int[a.Length];

            for(int k = c.Length - 1; k >= 0; k--)
            {
                c[count[a[k]] - 1] = a[k];
                count[a[k]]--;
            }

            return c;
        }
    }
}
