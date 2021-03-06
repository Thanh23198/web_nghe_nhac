import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RegisterComponent} from './component/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// angular meterial
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {ChangePasswordComponent} from './component/change-password/change-password.component';
import {ProfileComponent} from './component/profile/profile.component';
import {NotGuardComponent} from './component/layout/not-guard/not-guard/not-guard.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {LoginComponent} from './component/login/login.component';
import {UpdateSongComponent} from './component/song/update-song/update-song.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {SearchSongComponent} from './component/song/search-song/search-song.component';
import {EditProfileComponent} from './component/edit-profile/edit-profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {
  CreateSongComponent,
} from './component/song/create-song/create-song.component';
import {AllListSongComponent} from './component/song/all-list-song/all-list-song.component';
import {CdkDragDropOverviewExampleComponent} from './component/dragdrop/cdk-drag-drop-overview-example/cdk-drag-drop-overview-example.component';
import {environment} from '../environments/environment';
import {GetAllSongsResolver} from './resolver/GetAllSongsResolver';
import {CdkDragDropConnectedSortingGroupExample} from './component/dragdrop/cdk-drag-drop-connected-sorting-group/cdk-drag-drop-connected-sorting-group-example';
import {GetUserInfoResolver} from './resolver/GetUserInfoResolver';
import {GetSongByUserIDResolver} from './resolver/GetSongByUserIDResolver';
import {GetAlbumsResolver} from './resolver/GetAlbumsResolver';
import {GetCategoriesResolver} from './resolver/GetCategoriesResolver';
import {GetSingersResolver} from './resolver/GetSingersResolver';
import {CreatePlaylistComponent} from './component/playlist/create-playlist/create-playlist.component';
import {DialogCreatePlaylistComponent} from './component/playlist/dialog-create-playlist/dialog-create-playlist.component';
import {DialogDeleteSongComponent} from './component/song/delete-song/dialog-delete-song/dialog-delete-song.component';
import {CreateCategoryDialogComponent} from './component/category/create-category-dialog/create-category-dialog.component';
import {DialogCreateAlbumComponent} from './component/album/dialog-create-album/dialog-create-album.component';
import {DialogCreateSingerComponent} from './component/singer/dialog-create-singer/dialog-create-singer.component';
import {FirebaseComponent} from './component/firebase/firebase/firebase.component';
import {FirebaseMP3Component} from './component/firebase/firebaseMP3/firebaseMP3.component';
import {FirebaseDialogAlbumComponent} from './component/firebase/firebaseDialogAlbum/firebaseDialogAlbum.component';
import {FirebaseDialogCategoryComponent} from './component/firebase/firebaseDialogCateogry/firebaseDialogCategory.component';
import {FirebaseDialogSingerComponent} from './component/firebase/firebaseDialogSinger/firebaseDialogSinger.component';
import {LoginSocialComponent} from './component/login-social/login-social.component';
import {LastestSongComponent} from './component/song/lastest-song/lastest-song.component';
import {ShowmoreSongLastestComponent} from './component/song/showmore-song-lastest/showmore-song-lastest.component';
import {FirebaseCreateSongComponent} from './component/firebase/firebaseCreateSong/firebaseCreateSong.component';
import {FirebaseUpdateSongComponent} from './component/firebase/firebaseUpdateSong/firebaseUpdateSong.component';
import {FirebaseEditProfileComponent} from './component/firebase/firebaseEditProfile/firebaseEditProfile.component';
import {PlaylistDetailComponent} from './component/playlist/playlist-detail/playlist-detail.component';
import {TracksComponent} from './component/song/tracks/tracks.component';
import {SearchPlaylistComponent} from './component/playlist/search-playlist/search-playlist.component';
import {DialogDeletePlaylistComponent} from './component/playlist/dialog-delete-playlist/dialog-delete-playlist.component';
import {DialogDeleteSongOfPlaylistComponent} from './component/playlist/dialog-delete-song-of-playlist/dialog-delete-song-of-playlist.component';
import {ListSingerComponent} from './component/singer/list-singer/list-singer.component';
import {SingerDetailComponent} from './component/singer/singer-detail/singer-detail.component';
import {NgxAudioPlayerModule} from 'ngx-audio-player';
import {TrackDetailComponent} from './component/song/track-detail/track-detail.component';
import {DialogEditPlaylistComponent} from './component/playlist/dialog-edit-playlist/dialog-edit-playlist.component';
import {NgxAudioComponent} from './component/player/ngx-audio/ngx-audio.component';
import {ShowSongsLastPlaylistComponent} from './component/playlist/show-songs-last-playlist/show-songs-last-playlist.component';
import {SongCommentComponent} from './component/comment/song-comment/song-comment.component';
import {SongLikeComponent} from './component/like/song-like/song-like.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ChangePasswordComponent,
    LoginComponent,
    ProfileComponent,
    NotGuardComponent,
    FirebaseComponent,
    FirebaseMP3Component,
    AllListSongComponent,
    CreateSongComponent,
    UpdateSongComponent,
    SidebarComponent,
    SearchSongComponent,
    DialogDeleteSongComponent,
    EditProfileComponent,
    CdkDragDropOverviewExampleComponent,
    CdkDragDropConnectedSortingGroupExample,
    DialogCreateSingerComponent,
    FirebaseDialogSingerComponent,
    CreateCategoryDialogComponent,
    FirebaseDialogCategoryComponent,
    DialogCreateAlbumComponent,
    FirebaseDialogAlbumComponent,
    CreatePlaylistComponent,
    DialogCreatePlaylistComponent,
    DialogDeleteSongComponent,
    LoginSocialComponent,
    LastestSongComponent,
    ShowmoreSongLastestComponent,
    FirebaseCreateSongComponent,
    FirebaseUpdateSongComponent,
    FirebaseEditProfileComponent,
    TracksComponent,
    PlaylistDetailComponent,
    SearchPlaylistComponent,
    DialogDeletePlaylistComponent,
    ListSingerComponent,
    SingerDetailComponent,
    TrackDetailComponent,
    DialogEditPlaylistComponent,
    NgxAudioComponent,
    ShowSongsLastPlaylistComponent,
    DialogDeleteSongOfPlaylistComponent,
    SongCommentComponent,
    SongLikeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        preventDuplicates: true,
      }
    ),
    // meterial
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    NgxAudioPlayerModule,

  ],
  providers: [
    FirebaseComponent,
    FirebaseMP3Component,
    FirebaseDialogSingerComponent,
    LoginComponent,
    GetAllSongsResolver,
    GetUserInfoResolver,
    GetSongByUserIDResolver,
    GetAlbumsResolver,
    GetCategoriesResolver,
    GetSingersResolver,
    FirebaseDialogCategoryComponent,
    FirebaseDialogAlbumComponent,
    CreatePlaylistComponent,
    DialogDeleteSongComponent,
    LoginSocialComponent,
    FirebaseCreateSongComponent,
    FirebaseUpdateSongComponent,
    FirebaseEditProfileComponent,
    DialogDeletePlaylistComponent,
    NgxAudioPlayerModule,
    PlaylistDetailComponent,
    DialogDeleteSongOfPlaylistComponent,

  ],
  bootstrap: [
    AppComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}
