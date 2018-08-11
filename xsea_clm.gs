function xsea

'reset'

'set x 1 144'
'set y 1 73'

'set lev 150'

'set t 1 12'
'clm=ave(vwnd,t+0,t=828,12)'
'modify clm seasonal'

'set fwrite -le ncep_vwnd150clm_nov.grd'
'set gxout fwrite'

'set t 11'
'd clm'
'disable fwrite'

return
