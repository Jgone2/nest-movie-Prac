import { IsNumber, IsString, Length, Min } from 'class-validator';

export class CreateMovieDto {
  @Length(1, 100)
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: true })
  readonly genres: string[];
}
