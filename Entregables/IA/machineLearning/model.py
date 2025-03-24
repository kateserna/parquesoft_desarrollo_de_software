import pandas as pd
from sklearn.model_selection import train_test_split
from datetime import datetime
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score
from sklearn.metrics import ConfusionMatrixDisplay
from sklearn.preprocessing import StandardScaler

import matplotlib.pyplot as plt

rh_datos_train = pd.read_csv("./Cleaned_HR_Data_Analysis.csv")

rh_datos_train['StartDate'] = pd.to_datetime(rh_datos_train['StartDate'])
rh_datos_train['Antiguedad'] = (datetime.today() - rh_datos_train['StartDate']).dt.days / 365.25

rh_datos_train["Title"] = rh_datos_train["Title"].astype("category").cat.codes
rh_datos_train["BusinessUnit"] = rh_datos_train["BusinessUnit"].astype("category").cat.codes
rh_datos_train["EmployeeStatus"] = rh_datos_train["EmployeeStatus"].astype("category").cat.codes
rh_datos_train["EmployeeType"] = rh_datos_train["EmployeeType"].astype("category").cat.codes
rh_datos_train["PayZone"] = rh_datos_train["PayZone"].astype("category").cat.codes
rh_datos_train["EmployeeClassificationType"] = rh_datos_train["EmployeeClassificationType"].astype("category").cat.codes
rh_datos_train["DepartmentType"] = rh_datos_train["DepartmentType"].astype("category").cat.codes
rh_datos_train["Division"] = rh_datos_train["Division"].astype("category").cat.codes
rh_datos_train["State"] = rh_datos_train["State"].astype("category").cat.codes
rh_datos_train["GenderCode"] = rh_datos_train["GenderCode"].astype("category").cat.codes
rh_datos_train["RaceDesc"] = rh_datos_train["RaceDesc"].astype("category").cat.codes
rh_datos_train["MaritalDesc"] = rh_datos_train["MaritalDesc"].astype("category").cat.codes
rh_datos_train["Performance Score"] = rh_datos_train["Performance Score"].astype("category").cat.codes
rh_datos_train["Training Program Name"] = rh_datos_train["Training Program Name"].astype("category").cat.codes
rh_datos_train["Training Type"] = rh_datos_train["Training Type"].astype("category").cat.codes
rh_datos_train["Training Outcome"] = rh_datos_train["Training Outcome"].astype("category").cat.codes

entrada = rh_datos_train[['Antiguedad', "Title", "BusinessUnit", "EmployeeStatus", "EmployeeType", "PayZone", "EmployeeClassificationType", "DepartmentType","Division", "State", "GenderCode", "RaceDesc", "MaritalDesc", "Satisfaction Score", "Current Employee Rating", "Engagement Score", 'Work-Life Balance Score', 'Training Program Name', 'Training Type', 'Training Outcome', 'Training Duration(Days)', 'Training Cost', 'Age']]

salida = rh_datos_train[["Performance Score"]]

x_train, x_test, y_train, y_test = train_test_split(entrada, salida, test_size=0.2, random_state=42)

scaler = StandardScaler()
x_train = scaler.fit_transform(x_train)
x_test = scaler.transform(x_test)

# activation{‘identity’, ‘logistic’, ‘tanh’, ‘relu’}, default=’relu’
# learning_rate{‘constant’, ‘invscaling’, ‘adaptive’}, default=’constant’
# solver{‘lbfgs’, ‘sgd’, ‘adam’}, default=’adam’
red_neuronal = MLPClassifier(hidden_layer_sizes=(20),activation="logistic", max_iter=500, verbose=True, tol=1e-10, random_state=1)
red_neuronal.fit(x_train, y_train)

# y_pred = clasificador.predict(x_test)
y_pred = red_neuronal.predict(x_test)

print(accuracy_score(y_test, y_pred))
#precision_score(y_test, y_pred, average='micro')

#ConfusionMatrixDisplay.from_estimator(clasificador, x_test, y_test)

ConfusionMatrixDisplay.from_estimator(red_neuronal, x_test, y_test)
plt.show
print()