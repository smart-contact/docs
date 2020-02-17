# Repository

Usiamo GitHub per il versioning del codice.
https://github.com/orgs/smart-contact/dashboard

## Branch
I branch da utilizza per ogni progetto sono i seguenti:
- [`Master`](#master)
- [`Develop`](#develop)
- [`Release`](#release)
- [`Hotfix`](#hotfix)
- [`Feature`](#feature)

### Master
 Questo è il branch stabile principale da cui vengono avviate le versioni. Tutti i cambiamenti vengono infine inseriti e uniti in questo branch.


### Develop
Questo è il branch su cui sta lavorando ogni membro del team. Una volta finalizzata una funzionalità viene automaticamente unita al branch develop.


### Release
Si tratta di un branch temporaneo creato dal branch master e dal quale le versioni vengono inviate ai server attivi

### Hotfix
Si tratta di branch temporanei creati dal branch master e infine uniti nel master con correzioni che non possono attendere e devono attivare un rilascio.


### Feature
Si tratta di branch temporanei che vengono creati dal branch develop e quindi riuniti nel branch di sviluppo al termine di una funzione.
Il branch dev'essere rinominato nel seguente modo: `feature/nome-della-feature`
Non implemantare più feature in un unico branch.
Si farà una PR e l'amministratore del progetto verificarà il codice e farà il merge al branch develop.

## Regole 
1. Ogni nuova pagina o caratteristica distinta deve avere il proprio branch 
2. Se vengono rilevati dei bug dopo un rilascio, i bug vengono corretti nel branch hotfix. 
3. Risolviamo tutti i bug sul computer locale, quindi li uniamo al master.
 Il branch di release è l'unico che genera tag di versione per ridurre al minimo il numero di versioni rilasciate. 
4. I numeri di versione avranno sempre 3 decimali (nel formato MAJOR.MINOR.PATCH) e iniziano con v. Ad es. v1.0.0
 - Versione MAJOR quando si apportano modifiche API incompatibili
 - Versione MINORE quando si aggiunge funzionalità in modo compatibile con le versioni precedenti
 - Versione PATCH quando si apportano correzioni di bug compatibili con le versioni precedenti.

## Readme
  Ogni progetto dovrà avere nel readme principale le istruzioni per installare il progetto

## Task
   I task verranno presi da Trello e dalle ISSUE di github.
   Ogni task avrà un branch dedicato (Es: feature/add-links-in-homepage)
