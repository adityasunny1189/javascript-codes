for(var i = 1; i < 100; i++)
{
    for (var n = 1; n < i; n++)
    {
        if(i === (6*n +1 ) || i === (6*n - 1))
        {
            if(i % 5 !== 0)
            {
                if(i % 7 !== 0)
                {
                    if(i % 11 !== 0)
                    {
                        console.log(i);
                    }
                }
            }
        }
    }
}