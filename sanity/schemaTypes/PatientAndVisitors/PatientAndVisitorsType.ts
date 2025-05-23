import { defineType , defineField } from "sanity"


export const PatientAndVisitorsType = defineType({
	name : "patientAndVisitors",
	title : "Patient And Visitors",
	type : "document",
	fields : [
		defineField({
			name : "inpatientServices",
			type : "inpatientServices",
			title : "Inpatient Services"
		}),
		defineField({
			name : "facilitiesAndVisitors",
			type : "facilitiesAndVisitors",
			title : "Facilities And Visitors",
		}),
		defineField({
			name : "supportServices",
			type : "supportServices",
			title : "Support Services"
		}),
		defineField({
			type : "insuranceAndBilling",
			name : "insuranceAndBilling",
			title : "Insurance and Billing"
		}),
	]
})