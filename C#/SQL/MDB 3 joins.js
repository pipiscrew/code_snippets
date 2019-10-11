select Διοργάνωση.ID,Διοργάνωση.Κωδικός,Διοργάνωση.Ονομασία ,Διοργάνωση.[Συντ Ονομασίας],Διοργάνωση.Τόπος,Διοργάνωση.[Συντ Τόπου],tblEidh.ID as [EidosDKwdikos],tblEidh.Περιγραφή as [EidosDPerifrafh],tblEidh.Σύντμηση as [EidosDSyntmhsh],Θεσμοί.Κωδικός as [8esmosKwdikos],Θεσμοί.Περιγραφή as [8esmosPerigrafh],Θεσμοί.Σύντμηση as [8esmosSyntmhsh],Βαθμολογίες.Κωδικός as [Ba8mosKwdikos],Βαθμολογίες.Περιγραφή as [Ba8mosPerigrafh],Βαθμολογίες.Σύντμηση as [Ba8mosSyntmhsh] from (((Διοργάνωση )
left join [Είδη Διοργανώσεων] as tblEidh on tblEidh.Κωδικός = Διοργάνωση.Είδος)
left join Θεσμοί on Θεσμοί.Κωδικός = Διοργάνωση.Θεσμός )
left join Βαθμολογίες on Βαθμολογίες.Κωδικός = Διοργάνωση.Βαθμολογία



SELECT ...
FROM ((origintable
JOIN jointable1 ON ...)
JOIN jointable2 ON ...)
JOIN jointable3 ON ...