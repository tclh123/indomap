/*
首先来谈谈这个算法。记st为起点，dist[i]为结点 i 到st的最短路径长。
初始化dist[st] = 0; 其余dist为INF(类似maxint)。当前结点 u = st。
从当前点u出发遍历邻点，更新dist[v] = min{ dist[v], dist[u]+w[u][v]};  ----------这里有点像状态转移
设一个集合S，总是把当前不在S中的结点的最小dist对应的点加入S中。
当所有点都在集合S中时，完毕。此时dist数组更新完毕，即从st到图上任意结点的最短路长都已经算出。
 
理解：关键在于集合S，每次取当前最小的dist。可见取到S中的点的dist都是已经更新完毕的了，即已算出的。
可以用反证明法想想，如果某次dist[i]是最小的dist，但是st到 i 还存在经过 u' 的更短的路，则
dist[u']必然 小于dist[i]，即u'会比 i 先成为当前点，那时dist[i]就会在u'作为当期点的时候被更新为
dist[u']+w[u'][i]了。 所以，dist[i]必是st到 i 的最短路长。
 
每次取一个元素到S中，所以循环n-1次，每次循环时，求最小dist(遍历n个结点)和更新相邻dist值(若采用邻接矩阵)都是O(n)的，所以时间复杂度为O(n^2)。

*/


#include<cstdio>  
#include<cstring>  
#include<vector>  
using namespace std;  
#define MAXN 100          
#define INF 1<<30  
//int G[MAXN][MAXN];    //邻接矩阵  
vector<int> G[MAXN];  //跟邻接表不同，但类似  
int w[MAXN][MAXN];  
int vis[MAXN];    
int dist[MAXN];   
int n;    
void dijkstra(int st)  
{  
    for(int i=0; i<n; i++) dist[i] = (i==st ? 0 :  INF);   
    vis[st] = 1;  
    int u = st;   
    for(int i=0; i<n-1; i++)  
    {  
        //for(int i=0; i<n; i++) if(i!=u && G[u][i]) dist[i] = dist[u]+w[u][i];  
        for(int i=0; i<(int)G[u].size(); i++) dist[G[u][i]] = dist[G[u][i]] < dist[u]+w[u][G[u][i]]? dist[G[u][i]] : dist[u]+w[u][G[u][i]];   //!!  
        int min = INF;    
        for(int i=0; i<n; i++)   if(!vis[i]) min = min<=dist[i]? min: dist[u = i];  // u = i
        if(min == INF) break;   //说明其他点是无法到达了  
        vis[u] = 1;   
    }  
}  
void read_graph()  
{  
    int e;    
    int u, v;  
    scanf("%d%d", &n, &e);  
    for(int i=0; i<e; i++)  
    {  
        scanf("%d%d",&u, &v);  
        scanf("%d", &w[u][v]);    
        //G[u][v] = 1;  
        G[u].push_back(v);  
    }  
}  
int main()  
{  
    read_graph();  
    int st;  
    while(scanf("%d", &st) !=EOF)  
    {  
        memset(vis, 0, sizeof(vis));  
        dijkstra(st);  
        printf("No.%d->No.%d :%d/n", st, n-1, dist[n-1]);  
    }  
}  
