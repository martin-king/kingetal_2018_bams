function plot

'reset'
'set vpage 0 11 0 6'
'set lon -30 75'
'set lat 25 75'

'set grads off'
'set display color white'
'set mpdraw on'
'set rgb 17 100 100 100'
'set map 17 1 6'
'set ylint 20'
'set xlint 20'
'set grid on 5 1'
'set xlopts 1 5 0.24'
'set ylopts 1 5 0.24'

'run /Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/rgbset.gs'

'set gxout shaded'
*'set rgb 16 200 200 200'
*'set rbcols 16'
*tas anom
*'set ccols  44 43 0 22 24 26 28'
*'set clevs  -0.4 -0.2 0.2 0.4 0.6 0.8'
*rain anom
*'set clevs -1.0 -0.8  -0.6  -0.4 -0.2 0.2 0.4  0.6  0.8 1.0'
*'set ccols 69  77   26  24  22  80  32  36 38 43 45'
'set clevs   -0.6  -0.4 -0.2 0.2 0.4  0.6  0.8 '
'set ccols     26  24  22  0   36 38 43 45'

*'set cmin 0.0'
'd maskout(regr,-prob+0.1)'
'run /Users/martinpeterking/work_2016dec.dir/martinking_temporary.dir/Desktop/work_sep2016.dir/some_grads_scripts.dir/scripts/cbar.gs 0.9 1 9.7 3.'
* cbar.gs sf vert xmid ymid

'set gxout contour'
'set clab off'
*'set cint 0.2'
'set cmax -0.1'
*'set ccolor 58'
'set ccolor 1'
*rain anom
'set clevs -0.4 -0.2'
*'set clopts -1 -1 0.15'
*'set clskip 2'
*'set cstyle 2'
'set cstyle 5'
'set cthick 8'
'd regr'
*'set cint 0.2'
'set cmin 0.1'
'set cstyle 1'
'set ccolor 1'
*'set ccolor 69'
*'set ccolor 28'
*rain anom
'set clevs 0.2 0.4'
'd regr'
'basemap o 15 15 L'
'set clevs 100'
'set ccolor 1'
'set cstyle 1'
'set grads off'
'set mpdraw off'
'set lwid 13 3.4'
'set cthick 13'
'set clopts -1 -1 0.16'
'set clab on'
'd regr'


return
