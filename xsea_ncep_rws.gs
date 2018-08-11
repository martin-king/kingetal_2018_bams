function xsea

'reset'

*'q file'
*dimen=sublin(result,5)
*xdim=subwrd(dimen,3)
*ydim=subwrd(dimen,6)
*'set x 1 180'
*'set y 1 91'

'set x 1 144'
'set y 1 73'
*'set z 1'
'set lev 200'

'set fwrite -le ncep_vrot200_nov_1948_2016.grd'
'set gxout fwrite'

*t=1511
*tmax=1704
t=11
tmax=837
*t=391
*tmax=756
*t=10
*t=389
*tmax=756
'f0=2.*7.292e-5*sin(lat*3.1416/180.)'
'one=1+0*lat'

while(t<=tmax)
 'set t 't
 say t
* 'd ave(sst,t-0,t+1)'
  'chi=fish_chi(uwnd.1,vwnd.2)'
  'uchi=-muadv(one,chi)'
  'vchi=-mvadv(one,chi)'
  'vor=fish_vor(uwnd.1,vwnd.2)'
*  'rws=-fish_div((f0+vor)*uchi,(f0+vor)*vchi)'
  'rws=vwnd.2-vchi'
  'd rws'
  t=t+12
endwhile

'disable fwrite'
*'quit'

return
