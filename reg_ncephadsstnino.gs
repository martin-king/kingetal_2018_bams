function reg_ncephadisst

'reset'
*'set xlopt color thickness size'
'set vpage 0 11 0 6'
'set xlopts 1 10 0.29'
'set ylopts 1 10 0.29'

'set lon 120 480'
ts=1
te=69
tt=te-ts+1

'set t 1'
'sstave=ave(maskout(sst.1,sst.1),t='ts',t='te')'
'set t 'ts' 'te
'sstanom=maskout(sst.1,sst.1)-sstave'
*nino3.4
'nino4ori=aave(sstanom,lon=190,lon=240,lat=-5,lat=5)'

'set t 1'
'set dfile 2'
*'/Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/scripts/polst.gs 0 n'
'zg500av2d=ave(zg500.2,t='ts',t='te')'

'set t 'ts' 'te
'zg500anom2d=(zg500.2)-zg500av2d'
'cova2dz=nino4ori*zg500anom2d'

*START HERE
'set t 1'
'nino4var=ave(pow(nino4ori,2),t='ts',t='te')'
'zg500var2d=ave(pow(zg500anom2d,2),t='ts',t='te')'

'reg2dz=ave(cova2dz,t='ts',t='te')/sqrt(nino4var)'
'covvar2dz=ave(pow(cova2dz/sqrt(nino4var)-reg2dz,2),t='ts',t='te')'

'tstat2d=abs(ave(cova2dz/sqrt(nino4var),t='ts',t='te'))/sqrt(covvar2dz)*sqrt('tt')'

'run /Users/martin//mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'
'set display color white'
'set grads off'
'set ylint 40'
'set xlint 60'
'set lat -80 80'
'set grid on 5 1'
'set mpdraw on'
'set rgb 17 80 80 80'
'set map 17 1 7'
'set gxout shaded'
'set rgb 16 180 180 180'
'set rbcols 16'
'set cmin 0'
*'d maskout(reg2dz,tstat2d-1.6)'
'd tstat2d-2.'

'set gxout contour'
'set clab off'
'set cint 0.5'
'set cmax -0.05'
'set ccolor 58'
*'set clopts -1 -1 0.15'
*'set clskip 2'
'set cstyle 2'
'set cthick 7'
*'d maskout(reg2dz,lon-363)'
'd maskout(reg2dz,lon-360)'
'set cint 0.5'
'set cmax -0.05'
'set ccolor 58'
'set cstyle 2'
'set cthick 7'
*'d maskout(reg2dz,lon-363)'
'd maskout(reg2dz,lon-360)'
'set cint 0.5'
'set cmax -0.05'
'set ccolor 58'
'set cstyle 2'
'set cthick 7'
*'d maskout(reg2dz,-lon+357)'
'd maskout(reg2dz,-lon+360)'
*
'set cint 0.5'
'set cmin 0.05'
'set cstyle 1'
'set ccolor 69'
*'set ccolor 1'
*'d maskout(reg2dz,lon-363))'
'd maskout(reg2dz,lon-360))'
'set cint 0.5'
'set cmin 0.05'
'set cstyle 1'
'set ccolor 69'
*'set ccolor 1'
*'d maskout(reg2dz,-lon+357))'
'd maskout(reg2dz,-lon+360))'
'set clab on'
'set clevs 0'
'set ccolor 1'
'set cstyle 1'
'set grads off'
'set mpdraw off'
'set cthick 8'
*'d reg2dz'

return
