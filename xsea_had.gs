function xsea

'reset'

*'q file'
*dimen=sublin(result,5)
*xdim=subwrd(dimen,3)
*ydim=subwrd(dimen,6)
'reset'
'set x 1 360'
'set y 1 180'
*'set lon 0.5 359.5'
*'set lat -89.5 89.5'
*'set z 11'


'set fwrite -le hadisst_sst_djf_1948_2016.grd'
*'set fwrite -le hadisst_nino34_nov_1948_2014.dat'
'set gxout fwrite'

*tmax=1692
t=949
tmax=1774

while(t<=tmax)
 'set t 't
 say t
* 'd aave(sst,lon=190,lon=240,lat=-5,lat=5)'
*  'd maskout(sst,sst+100)'
  'd ave(maskout(sst,sst+100),t-1,t+1)'
  t=t+12
endwhile

'disable fwrite'
*'quit'

return
