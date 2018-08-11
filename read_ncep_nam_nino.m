clear all;
close all;
startup;
format long;

totmon=8;
namindex=[];

for icount=1+9:totmon+9
% fid=fopen(strcat('jra_ugrd_',num2str(icount),'_autumn1958_spring2012.dat'),'r','ieee-le'); %from Nov 1900
 fid=fopen(strcat('ncep_uwnd_trop40to50n270to360e_strat50to60nzonalmean_',num2str(icount),'_autumn1948_spring2017.dat'),'r','ieee-le'); %from Nov 1900
 pc1=fread(fid,inf,'float32');
 fclose(fid);
 pc1=pc1(1:1173);
 pc1=reshape(pc1,17,69);
% pc1=pc1(1:1296);
% pc1=reshape(pc1,24,54);
 namindex=[namindex  pc1];
end

%dim 1=no. of levels; dim 2=no. of years; dim3=no. of pentads
namindex=reshape(namindex,17,69,totmon);

fid=fopen('hadisst_nino34_nov_1948_2014.dat','r','ieee-le');
sstindex=fread(fid,inf,'float32');
fclose(fid);


cor=[];
p=[];
for ilev=1:17
    for imon=1:totmon
%     stddev=std(namindexfih(ilev,1:109,imon));
     [corr,pp]=corrcoef(namindex(ilev,1:end-2,imon),sstindex(1:end));
%     [corr,pp]=corrcoef(namindexfih(ilev,1:109,imon),namindexfih(23,1:109,4));
     cor(ilev,imon)=corr(1,2)*std(namindex(ilev,1:end-2,imon));
     if pp(1,2)>0.1
      p(ilev,imon)=0;
     else
      p(ilev,imon)=1;
     end
    end
end


lev=fliplr([10 20 30 50 70 100 150 200 250 300 400 500 600 700 850 925 1000]);
mon=[1:totmon]+9;

[x,y]=meshgrid(mon,lev);

addpath('./cbrewer');

scrsz = get(0,'ScreenSize');
%[left, bottom, width, height]
figure('Position',[1 scrsz(4)/2 scrsz(3)/1.2 scrsz(4)/1.5]);

figure(1),clf
CT=cbrewer('div','RdBu',9);
v=[-5:0.5:5];
colormap(flipud(CT(5-3:5+3,:)));
[C,h]=contourf(x,y,cor,v,'k-');

set(gca,'YDir','reverse','yscale','log');
set(gca,'YTick',[10 30 50 70 100 300 500 700 1000]);
set(gca,'XTick',[10 11 12 13 14 15 16 17]);
set(gca,'XTickLabel',{'Oct' 'Nov' 'Dec' 'Jan' 'Feb' 'Mar' 'Apr' 'May'});
axis([10 16 10 1000]);

clabel(C,h,'manual','FontSize',46,'Rotation',0);
hold on;
plot(x.*p,y.*p,'k+','MarkerSize',10);
plot([10 17],[100 100],'k-','LineWidth',10,'color',[0,0,0]+1.0);
title('Regression of zonal wind on Nino3.4, 1948-2016','FontSize',46);
hold off;

%colorbar('YTick',v);
