import pandas as pd 
from google.colab import drive

df1 = pd.read_csv('/drive/MyDrive/PayCollege/degrees-that-pay-back.csv')
df2 = pd.read_csv('/drive/MyDrive/PayCollege/salaries-by-college-type.csv')
df3 = pd.read_csv('/drive/MyDrive/PayCollege/salaries-by-region.csv')

sorted_df = df1.sort_values(by='Starting Median Salary', ascending=False)
sorted_df.head(5)


