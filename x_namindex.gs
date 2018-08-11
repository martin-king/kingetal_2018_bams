function x

'reset'
tmax=833
t1=17
t=0+t1
zmax=17

'set fwrite -le -st ncep_uwnd_trop40to50n270to360e_strat50to60nzonalmean_'t1'_autumn1948_spring2017.dat'
'set gxout fwrite'

while (t<=tmax)
  'set t 't
  say t
  z=1
  while (z<=zmax)
   'set z 'z
*nam   'annmod=aave(hgt,lon=240,lon=360,lat=60,lat=90)'
*at 100mb or higher altitude
   if (z>11)
    'annmod=aave(uwnd,lon=0,lon=360,lat=50,lat=60)'
   else
    'annmod=aave(uwnd,lon=270,lon=360,lat=40,lat=50)'
   endif
   'd annmod'
   z=z+1
  endwhile
  t=t+12
endwhile
'disable fwrite'

return
