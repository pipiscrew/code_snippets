'source
'http://tomyad.blogspot.com/search?updated-max=2008-09-02T01%3A39%3A00-07%3A00&max-results=7

Command for StandBy:
rundll32 Powrprof,SetSuspendState 0,1,1

Command for Hibernate:
rundll32 Powrprof,SetSuspendState 1,1,1



VB.Net StandBy & Hibernate code:

'StandBy
Application.SetSuspendState(PowerState.Suspend, True, True)

'Hibernate
Application.SetSuspendState(PowerState.Hibernate, True, False)