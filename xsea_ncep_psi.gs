function xsea

'reset'
*sdfopen hgt.mon.mean.nc

'set x 1 144'
'set y 1 73'
'define sinlat = sin(lat*3.1415/180)'
* Coriolis parameter
'define f = 2*7.272/100000*sinlat'
'define g=9.81'
'set lev 150'
'set t 1 12'
'define zclm=ave(hgt,t+0,t=828,12)'
'modify zclm seasonal'

'set fwrite -le ncep_psia150_nov_1948_2016.grd'
'set gxout fwrite'

t=11
tmax=837

while (t<=tmax)
  'set t 't
   say t
   'define psia=g/f*(hgt-zclm)'
   'd psia'
   t=t+12
endwhile

'disable fwrite'

return
