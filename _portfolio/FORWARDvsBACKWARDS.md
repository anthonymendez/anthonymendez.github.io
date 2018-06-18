---
layout: post
title: "Forward vs Backwards Loops"
subtitle: "in Java"
feature-img: "assets/img/portfolio/forwardvsbackwards.png"
img: "assets/img/portfolio/forwardvsbackwards.png"
date: 2017-06-14
---
# *Disclaimer: Reposting ReadMe from Github Repo*

<hr />

# Forwards vs Backwards Loops in Java
This was a quick test to see whether or not a forward or backwards loop is faster in Java. Inspired by this article: <a href="https://medium.com/@TravCav/why-reverse-loops-are-faster-a09d65473006">https://medium.com/@TravCav/why-reverse-loops-are-faster-a09d65473006</a>

## Disclaimer

<b>This was not a serious experiment by any means.</b> I was bored and wanted to test out the difference between forward and backward loops in Java.

## My System

All of these tests runs were ran on a 2017 Dell Inspiron 15 Gaming 5000.
- Intel i5 7300HQ
- Nvidia GTX 1050 4GB
- DDR4 8GB Ram
- 5200RPM 1 TB Storage

So your mileage may vary for your system.

## Testing Methodology

I went through a total of 4 test runs. Each with a different amount of total run times. I first did 500 runs, then 10,000, then 1,000,000 runs, then 10,000,000 runs. Each times a run was completed, it would print out the results to a log file, and two different textfiles. The textfiles would be used to copy and paste all the data to an Excel Spreadsheet. 

The Excel Spreadsheet was set-up to calculate the Average Time, Standard Deviation, Lowest Time, Highest Time, Total Time, and Time Difference between the two runs.

However there were issues importing the 10,000,000 run data to Excel. When I copy and pasted the data from text files, Excel can only have a total of 1,048,576 entries. So to calculate all the appropriate data for the 10,000,000 million run, I had to come up with some extra Java code to reach both files and print out the information to another file. 

My steps for each run were as follow:

1. Run the test and wait for it to finish.
2. Once finished, copy and paste all the from the text files to an Excel designated for this test run.
3. Eliminate any extreme outliers, otherwise, leave the data as is.
4. Start over at 1. but modify int runLimit.

## Results

Standard Deviation was calculated using the Sample Standard Deviation Excel Formula.
All of the times are in nanoseconds unless otherwise stated.

### 500 Run Trial

| Data Type (ns) | Forward Runs | Backward Runs |
|---|---|---|
| Average Time | 53965.108 | 46863.534 |
| Standard Deviation | 85124.13387	| 58586.45445 |
| Lowest Time	| 37743	| 36512 |
| Highest Time |	982153	| 861948 |
| Total Time |	26982554	| 23431767 |
| Total Difference |	3550787	| -3550787 |

### 10,000 Run Trial

| Data Type (ns) | Forward Runs | Backward Runs |
|---|---|---|
| Average Time | 40574.7367	| 40280.0478 |
| Standard Deviation | 27458.3412	| 22933.27012 |
| Lowest Time	| 34051	| 34051 |
| Highest Time |	1318563	| 881230 |
| Total Time |	405747367	| 402800478 |
| Total Difference |	2946889	| -2946889 |

### 1,000,000 Run Trial

| Data Type (ns) | Forward Runs | Backward Runs |
|---|---|---|
| Average Time | 40110.22435 | 39734.22721 |
| Standard Deviation | 20216.44531 | 19228.05157 |
| Lowest Time	| 32821	| 33641 |
| Highest Time |	7055584	| 6874661 |
| Total Time |	40110224352	| 39734227210 |
| Total Difference |	375997142	| -375997142 |

### 1,048,576 Run Trial

| Data Type (ns) | Forward Runs | Backward Runs |
|---|---|---|
| Average Time | 40143.11016	| 39828.43889 |
| Standard Deviation | 20480.34699 | 15429.45229 |
| Lowest Time	| 33230	| 33231 |
| Highest Time |	7670968	| 2656408 |
| Total Time |	42093061731	| 41763105313 |
| Total Difference |	329956418	| -329956418 |

### 10,000,000 Run Trial 
#### (Java Calculated)

| Data Type (ns) | Forward Runs | Backward Runs |
|---|---|---|
| Average Time | 40376.359217	| 39927.632116 |
| Standard Deviation | 17456.125408 | 16200.770540 |
| Lowest Time	| 32410	| 32410 |
| Highest Time |	8763069	| 8763069 |
| Total Time |	403763592174	| 399276321157 |
| Total Difference |	4487271017	| -4487271017 |

## Visualized

![drawing](https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/raw/master/img/Averages_FRvsBR.png?raw=true)
![drawing](https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/raw/master/img/STDEV_FRvsBR.png?raw=true)
![drawing](https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/raw/master/img/MIN_FRvsBR.png?raw=true)
![drawing](https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/raw/master/img/HIGH_FRvsBR.png?raw=true)
![drawing](https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/raw/master/img/TotalTime_FRvsBR.png?raw=true)
![drawing](https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/raw/master/img/TimeDifference_FRvsBR.png?raw=true)

## What does it mean?

Well it can mean many things. I'm going to focus on Average, Total Time, and Time Difference.

### Average

![drawing](https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/raw/master/img/Averages_FRvsBR.png?raw=true)

As we can see, performing a backwards loop instead of a forwards loop is, on average, quicker. But only by a very little amount, this is in nanoseconds after all. 

### Total Time & Time Difference

![drawing](https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/raw/master/img/TotalTime_FRvsBR.png?raw=true)

This graph doesn't say much. The most noticable difference is when we get to the 10,000,000 case run and even then, the graph is indicating the differences are small. However...

![drawing](https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/raw/master/img/TimeDifference_FRvsBR.png?raw=true)

Anything less than around 1,000,000 the difference in time seems negligible. But, when we get to 10,000,000 the difference is incredibly noticable. But with a difference of about 4.5 \* 10 \^9, that only translates to about 4.5 seconds. Yes, when we go through 10 million case runs of a 100,000 long array, the difference is 4.5 seconds.

## Conclusion

In this very unscientific and shoddy experiment, I can conclude that backwards looping is faster than forward looping. But just ever so slightly.

Code can be found here: <a href = "https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/tree/master/src">https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/tree/master/src</a>

Excel File can be found here: <a href = "https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/releases">https://github.com/anthonymendez/Java-Forward-vs-Backwards-Loops/releases</a>

If there are any issues please let me know!