function reg_ncephadisst

'reset'
*e.g.
*open hadisst_sst_djf_1948_2016.ctl
*open ncep_psia200_feb_1949_2017.ctl
*open ncep_uwnd200clm_feb.ctl
*open ncep_vwnd200clm_feb.ctl

*'set xlopt color thickness size'
'set vpage 0 11 0 3.6'
'set xlopts 1 10 0.29'
'set ylopts 1 10 0.29'

'define one=1+0*lat'
'levv = 200'
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
'psiaav2d=ave(psia.2,t='ts',t='te')'

'set t 'ts' 'te
'psianom2d=(psia.2)-psiaav2d'
'cova2dz=nino4ori*psianom2d'

*START HERE
'set t 1'
'nino4var=ave(pow(nino4ori,2),t='ts',t='te')'
'psivar2d=ave(pow(psianom2d,2),t='ts',t='te')'

'reg2dz=ave(cova2dz,t='ts',t='te')/sqrt(nino4var)'
'covvar2dz=ave(pow(cova2dz/sqrt(nino4var)-reg2dz,2),t='ts',t='te')'
'tstat2d=abs(ave(cova2dz/sqrt(nino4var),t='ts',t='te'))/sqrt(covvar2dz)*sqrt('tt')'

'define coslat = cos(lat*3.1415/180)'
'define magU = mag(uclm.3,vclm.4)'
'define coeff1=coslat*(levv/1000)/(2*magU)'
'define one=1+0*lat'
'define dpsidx = -muadv(one,reg2dz)'
'define ddpsidxx = -muadv(one,dpsidx)'
'define dpsidy = -mvadv(one,reg2dz)'
'define ddpsidyx = -muadv(one,dpsidy)'
'define ddpsidyy = -mvadv(one,dpsidy)'

'define termxu = dpsidx*dpsidx-reg2dz*ddpsidxx'
'define termxv = dpsidx*dpsidy-ddpsidyx*reg2dz'
'define termyv = dpsidy*dpsidy-reg2dz*ddpsidyy'

'px = coeff1*(uclm.3*termxu + vclm.4*termxv)'
'py = coeff1*(uclm.3*termxv + vclm.4*termyv)'

*PLOTTING PSIA REGRESSION
'run /Users/martin/mbp1rsync.dir/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'
'set display color white'
'set grads off'
'set ylint 20'
'set xlint 60'
'set lat 20 90'
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
'set cint 0.1'
'set cmax -0.1'
'set ccolor 58'
*'set clopts -1 -1 0.15'
*'set clskip 2'
'set cstyle 2'
'set cthick 7'
'd reg2dz*1e-7'
'set cint 0.1'
'set cmin 0.1'
'set cstyle 1'
'set ccolor 69'
*'set ccolor 1'
'd reg2dz*1e-7'
'set clab on'
'set clevs 0'
'set ccolor 1'
'set cstyle 1'
'set grads off'
'set mpdraw off'
'set cthick 8'
'd reg2dz*1e-7'

*PLOTTING (Fx,Fy)
len=0.5
scale=1
ybot = 3.1
xrit = 9.1
*set arrscl ref_length magnitude
'set arrscl 'len' 'scale
*turn arrow label on
'set arrlab off'

'set arrowhead 0.07'
'set ccolor 1'
'set cthick 5'

'v1=maskout(px,mag(px,py)-0.12)'
'v2=maskout(py,mag(px,py)-0.12)'
'd skip(v1,3,2);v2'

rc = arrow(xrit-0.25,ybot+0.2,len,scale)

function arrow(x,y,len,scale)
'set line 1 1 4'
*arrow line
'draw line 'x-len/2.' 'y' 'x+len/2.' 'y
*arrow tip
'draw line 'x+len/2.-0.1' 'y+0.05' 'x+len/2.' 'y
'draw line 'x+len/2.-0.1' 'y-0.05' 'x+len/2.' 'y
'set string 1 c'
'set strsiz 0.18'
'draw string 'x' 'y-0.25' 'scale' m^2/s^2'


return
